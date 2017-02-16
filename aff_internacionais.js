coisas = {
		"paris" : {
		titulo: "Paris",
		desc: "Paris é a capital mais populosa cidade da França.",
		clima: "De tipo oceânico de transição",
		pturistico: "Torre Eiffel,Arco do Triunfo,Museu do Louvre,Panteão...",
		cultura: "Paris tem um lugar privilegiado no âmbito artístico e cultural a nível mundial nos últimos séculos.<br> Nasceram na cidade movimentos artísticos como o expressionismo, o surrealismo e o fauvismo e importantes figuras da arte e pensamento como René Descartes, Voltaire, Victor Hugo, Émile Zola..."
	}
		"dubai" : {
		titulo: "Dubai",
		desc: "Dubai é a maior cidade e emirado de mesmo nome dos Emirados Árabes Unidos.",
		clima: "Predominantemente quente e árido",
		pturistico: "Palm Islands,The World,Burj Al Arab,Burj Khalifa...",
		cultura: "Dubai é famosa por suas obras grandiosas e de forte apelo turístico. Dentre elas, podemos destacar as Palm Islands, o arquipélago The World, o hotel Burj Al Arab e o edifício Burj Khalifa."
	}
			"newyork" : {
		titulo: "New York",
		desc: "New York é um estado no nordeste dos Estados Unidos e é o 27º mais extenso.",
		clima: "Clima continental úmido",
		pturistico: "Central Park,Estátua da Liberdade,Empire State Building,Times Square...",
		cultura: "É uma cidade altamente ativa. Possui muitos cognomes: O mais famoso deles é (A Grande Maçã)."
	}
			"puntacana" : {
		titulo: "Punta Cana",
		desc: "Punta Cana faz parte do distrito municipal de Punta Cana-Bávaro-Verón-Macao,em La Altagracia,a província mais oriental <br>da República Dominicana.",
		clima: "",
		pturistico: "",
		cultura: ""
	}

	
	
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function affdetalhes (it) {
	document.getElementById("").src = it.imagem;
	document.getElementById("").innerHTML = it.titulo;
	document.getElementById("").innerHTML = it.desc;
	document.getElementById("").innerHTML = it.clima;
	document.getElementById("").innerHTML = it.pturistico;
	document.getElementById("").innerHTML = it.cultura;
}

var infos = getParameterByName('infos');
affdetalhes(coisas[infos]); 