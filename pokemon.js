const URL = new URLSearchParams(window.location.search)

// VIS SPINNER

fetch(`https://pokeapi.co/api/v2/pokemon/${URL.get("name")}`)
	.then(function(response) {
		if (response.status === 200) {
			return response.json()
		} else {
			document.body.innerText += "Ups, noget gik galt. Prøv igen senere."
		}
	})
	.then(function(data) {
		// SKJUL SPINNER
		const DIV = document.querySelector(".pokemon")
		DIV.innerHTML = `
		<h1>${data.name}</h1>
		<span class="imagePlaceholder">
			<svg id="eS2kUxmi6LG1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="width:475px;height:auto;"><g transform="matrix(1.582257 0 0 1.667436-87.919802-4.06234)"><ellipse rx="5.407725" ry="33.540773" transform="matrix(.454939-.890523 0.890523 0.454939 109.828326 46.893081)" fill="#d2dbed" stroke-width="0"/><ellipse rx="5.407725" ry="33.540773" transform="matrix(.940987 0.338442-.338442 0.940987 182.446352 45.062877)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(.831645 0 0 0.562309 155.161617 75.278667)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(.743549 0 0 0.395711 148.89859 83.554516)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(.743549 0 0 0.808052 158.394324 117.425026)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(.82613 0 0 0.479184 151.928923 137.510623)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(.338402-.186419 0.091117 0.165401 135.691915 157.59622)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(-.001369-.38635 0.188837-.000669 168.217746 157.16467)" fill="#d2dbed" stroke-width="0"/><ellipse rx="36.695279" ry="41.916251" transform="matrix(.593672 0.115888-.148892 0.762748 140.314468 117.425026)" fill="#d2dbed" stroke-width="0"/><rect width="20.085837" height="53.253369" rx="0" ry="0" transform="matrix(.472129 0.70219-.82986 0.55797 210.198956 101.326144)" fill="#d2dbed" stroke-width="0"/><rect width="20.085837" height="53.253369" rx="0" ry="0" transform="matrix(.569409 0.846872-.306906 0.206354 202.022867 89.425861)" fill="#d2dbed" stroke-width="0"/><rect width="20.085837" height="53.253369" rx="0" ry="0" transform="matrix(.375267 0.558128-.306906 0.206354 214.602087 81.225947)" fill="#d2dbed" stroke-width="0"/><rect width="20.085837" height="53.253369" rx="0" ry="0" transform="matrix(.768827 1.143463-.306906 0.206354 201.969881 62.152093)" fill="#d2dbed" stroke-width="0"/></g></svg>
		</span>
		<h4>Height: ${data.height}</h4>
		<h3>Abilities</h3>
		<ul>${data.abilities.map(
			elem => `<li>${elem.ability.name}</li>`
		).join("")}</ul>`


		const IMG = new Image()
		IMG.src = data.sprites.other["official-artwork"].front_default

		IMG.onload = function() {
			DIV.querySelector(".imagePlaceholder svg").style.display = "none"
			DIV.querySelector(".imagePlaceholder").append(IMG)
		}
	})