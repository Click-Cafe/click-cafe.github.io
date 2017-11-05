var myVar;

			function myFunction() {
				myVar = setTimeout(showPage, 3000);
			}

			function showPage() {
				document.getElementById("loader").ccstyle.display = "none";
				document.getElementById("myDiv").ccstyle.display = "block";
			}