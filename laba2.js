		function gnomeSort() {
			let arrayInput = document.getElementById("array").value;
			let array = arrayInput.split(",").map(Number);
			let output = document.getElementById("output");
			let table = document.createElement("table");
			let iterations = 0;
			let i = 1;
			while (i < array.length) {
				if (array[i - 1] <= array[i]) {
					i++;
				} else {
					iterations++;
					let temp = array[i];
					array[i] = array[i - 1];
					array[i - 1] = temp;
					if (i > 1) {
						i--;
					}
				}
				let row = document.createElement("tr");
				for (let j = 0; j < array.length; j++) {
					let cell = document.createElement("td");
					cell.innerText = array[j];
					if (j === i - 1 || j === i) {
						cell.classList.add("pink");
					}
					row.appendChild(cell);
				}
				table.appendChild(row);
			}
			output.innerHTML = "<h2>Sorted Array:</h2>";
			output.appendChild(table);
			output.innerHTML += "<p>Iterations: " + iterations + "</p>";
		}