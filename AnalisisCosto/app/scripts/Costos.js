function Desplegar2(opc){
	
	var Body=document.querySelector('.panelBody');

	var Costos=new Array();
	var campos=new Array("Item", "Costo");

	var valores=new Array(
					Array('"Alquiler Inmueble"', 3000),
					Array('"Impuestos Inmoviliaria"', 3000),							
					Array('"Gastos Administrativos"', 700),
					Array('"Transporte"', 300),
					Array('"Suministros"', 1500),
					Array('"Costo Fabricación"', 2500)

		);

	var Resul=agregandoDatosArray(campos, valores, 1);
	Costos.push({Fijo:Resul});

	var valores=new Array(
					Array('"Materia Prima"', 2500),
					Array('"Insumos Directos"', 1200),							
					Array('"Mano de Obra"', 1600),
					Array('"Comisiones sobre Venta"', 4500),							
					Array('"Envases y Embalajes"', 800)

		);

	var Resul=agregandoDatosArray(campos, valores, 1);
	Costos.push({Fijo:Resul});

	var valores=new Array(
					Array('"Provisionamiento"', 2450),
					Array('"Almacenamiento"', 450),							
					Array('"Inventario"', 245),
					Array('"Transporte Interno"', 350),
					Array('"Distribución del Producto"', 700)
							
		);

	var Resul=agregandoDatosArray(campos, valores, 1);
	Costos.push({Fijo:Resul});

	var CostoProduccion=new Array();
	var campos=new Array("NProducto", "PVU", "UV", "IT", "CVU", "CQ", "UM", "SRC");


	var valores=new Array('"Producto 1"', 200, 150,3000, 70.66666667, 102.0231959, 20404.63918, '"../../images/Grafi1.PNG"')
	var Resul=agregandoDatosArray(campos, valores, 2);
	CostoProduccion.push({Costo:[Resul]});
	

	var valores=new Array('"Producto 2"', 80, 150,1600, 53, 488.7037037, 39096.2963, '"../../images/Grafi2.PNG"')
	var Resul=agregandoDatosArray(campos, valores, 2);
	CostoProduccion.push({Costo:[Resul]});

	var valores=new Array('"Producto 3"', 120, 400,48000,26.5, 141.1229947, 16934.75936, '"../../images/Grafi3.PNG"')
	var Resul=agregandoDatosArray(campos, valores, 2);
	CostoProduccion.push({Costo:[Resul]});

	var valores=new Array('"Producto 4"', 170, 350,59500,30.28571429, 94.44274029, 16055.26585, '"../../images/Grafi4.PNG"')
	var Resul=agregandoDatosArray(campos, valores, 2);
	CostoProduccion.push({Costo:[Resul]});

	if(opc==1){				
		var CostosItem={"opcBody":{InventB:"1"}};
		Body.innerHTML=PrinceApp.bodyCostos(CostosItem);

		var table=document.querySelectorAll('.tableCosto');
		

		table.forEach(function(table, i) {
			
			var sum=0;
			for(var j=0; j<Costos[i].Fijo.length; j++){
				sum+=Costos[i].Fijo[j].Costo;
			}
			var Variable=Costos[i];
			table.innerHTML=PrinceApp.table({Variable, Sum:sum})		
		});
	}

	if(opc==3){				
		var CostosItem={"opcBody":{InventB:"3"}};
		Body.innerHTML=PrinceApp.bodyCostos(CostosItem);

		var tableCostos=document.querySelectorAll('.graficaM');
		

		tableCostos.forEach(function(table, i) {
			
			var variable=CostoProduccion[i];
			
			table.innerHTML=PrinceApp.tableGrafica({variable});
		});	

	}

}


function agregandoDatosArray(Campos, valores, opc){	
	
	if(opc==2){		
		var CamposB='{';	
		for(let i in Campos){
			CamposB+='"'+Campos[i]+'":'+valores[i]+',';
		}
		CamposB+='"CFT":13195, "CVT":10600';
		CamposB+='}';
		return JSON.parse(CamposB);
	}else if(opc==1){
				
		var DevoArray=new Array();
		for(let i in valores){
			var tam=Campos.length;
			var String='{';
			for(let j in Campos){
				String+='"'+Campos[j]+'":'+valores[i][j];
				if(j<(tam-1)){String+=',';}				
			}
			String+='}';
			var covert=JSON.parse(String)
			
			DevoArray.push(covert);					
		}
		return DevoArray;

	}
	
}