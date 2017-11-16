/** client-side **/
let player = await getPlayer({byEmail: 'romain@agilitation.fr'});

player.activity.push({
	event: "pageview:product",
	details: {
		url: "/fr/blouses/2-7-chemisier.html#/1-taille-s/11-couleur-noir",
		product: {
			price: 49.5,
			id: 7,
			title: "CHEMISIER"
		}
	}
})

/** server-side **/
let badge = createBadge({
	title: "Product Discovery",
	icon: "discovery2.jpg",
	unique: true
});

let ruleset = createRuleset((context, player)=>{
	player.on("pageview", (event)=>{
		player.givePoints(10, "pageviews");
		if(player.countPoints("pageviews") > 100){
			player.award(badge)	
		}
	});
});

