if (performance.getEntriesByType("navigation")[0].type === "reload") {
	diceRoll();
}
function diceRoll() {
	let player1roll = Math.floor(Math.random() * 6);
	let player2roll = Math.floor(Math.random() * 6);

	const player1Image = document.querySelector(".img1");
	const player2Image = document.querySelector(".img2");

	const diceImages = [
		"./images/dice1.png",
		"./images/dice2.png",
		"./images/dice3.png",
		"./images/dice4.png",
		"./images/dice5.png",
		"./images/dice6.png",
	];

	player1Image.src = diceImages[player1roll];
	player2Image.src = diceImages[player2roll];

	if (player1roll > player2roll) {
		document.querySelector("h1").innerText = "Player 1 wins";
	} else if (player2roll > player1roll) {
		document.querySelector("h1").innerText = "Player 2 Wins";
	} else {
		document.querySelector("h1").innerText = "tie";
	}
}
