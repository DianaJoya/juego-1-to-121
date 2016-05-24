
var segundos = minutos = ayuda = 0;
var NumBuscar = 1;
 tabla();

 function generarnumerosaleat()
 {
  var numerosaleat = [];
 	for (var i = 0; i < 121; i++)
 	{
 		numerosaleat [i] = i+1;
 	}

 	numerosaleat = numerosaleat.sort
 	(
 		function() { return Math.random() - 0.5 }
  );
 	return numerosaleat;
 }

 function tabla()
 {
 	var Numero = generarnumerosaleat();
 	var index = 0;
 	var txt = "<table border = '0.5' solid black>";


 	for(var i = 0; i < 11; i++)
 	{
 		txt += "<tr>";
 		for(var j = 0; j < 11; j++)
 		{
 			txt += "<td id = '"+i+"-"+j+"'> "+Numero[index]+" </td>";
 			index++;
 		}
 		txt += "</tr>";
 	}
 	txt += "</table>";
 	num("tabla").innerHTML = txt;

 	     for (var i = 0; i < 11; i++)
     {
    	for(var j = 0; j < 11; j++)
		{
 			num(i+"-"+j).addEventListener("click", function(event)
 			{
 				var id = event.target.id;


 				if (num(id).innerHTML == NumBuscar)
 				{
 					num(id).className = "correcto";
 					if (NumBuscar == 121)
 					{
 						num("ganador").innerHTML = "Ha ganado con un " + tiempototal();
 						num("nuencontrar").innerHTML = "";
 					}else
 					{

 						NumBuscar = NumBuscar+1;
 						num("nuencontrar").innerHTML = "Numero a encontrar: " + NumBuscar;
 					}
 				}
 			});
 		}
     }
}

 function num(div)
 {
 	return document.getElementById(div);
 }
