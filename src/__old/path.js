(function () {
    function Path(path) {
        path = path || '';
        this.parts = Path.split(path).map(function (part) {
            return new PathPart(part);
        });
    }

    Path.prototype.match = function (pathParts, ctx) {
        var match = true;
        var parts = this.parts;
        pathParts = Path.split(pathParts);
        pathParts.forEach(function (part, i) {
            if (typeof parts[i] === 'undefined') {
                match = false;
                return;
            }
            if (!parts[i].match(part)) {
                match = false;
            } else if (parts[i].name) {
                ctx.params[parts[i].name] = part;
            }
        });
        return match;
    };

    Path.prototype.toString = function () {
        return this.parts.map(function (part) {
            return part.toString()
        }).join('/');
    };

    Path.prototype.part = function (index) {
        return this.parts[index];
    };

    Path.prototype.length = function () {
        return this.parts.length;
    };

    Path.prototype.minlength = function () {
        var l = 0;
        this.parts.forEach(function (part) {
            if (!part.optional) {
                l++;
            }
        });
        return l
    };

    function PathPart(part) {
        var lastChar = part.charAt(part.length - 1);
        this.resource = part.charAt(0) === ':';
        this.optional = lastChar === '?';
        this.wildcard = lastChar === '*';

        var substrLen = (this.optional || this.wildcard) ? part.length - 2 : part.length;
        if (this.resource) {
            this.name = part.substr(1, substrLen);
        } else {
            this.value = part.substr(0, substrLen + 1);
        }
        return this
    }

    PathPart.prototype.toString = function () {
        var str = this.resource ? ':' : '';
        str += this.name || this.value;
        str += this.optional ? '?' : '';
        str += this.wildcard ? '*' : '';
        return str;
    };

    PathPart.prototype.match = function (value) {
        if (this.resource && value || this.value === value) return true;
        return (this.optional && !value);
    };

    Path.split = function splitPath(path) {
        return path.split('/').filter(function (part) {
            return (part)
        });
    };

    window.Path = Path;

})();