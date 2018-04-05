var menu=document.querySelector('.menu');

var menuItems=[
	
	{"item":"Exploración de Competidores", "active":3},
	{"item":"Proveedores", "active":4},
	{"item":"Análisis de Costo", "active":5},
	{"item":"Exploración de productos", "active":6}

];


var menuContexto={menuItems};
menu.innerHTML=PrinceApp.menu(menuContexto);


var titulos=document.querySelector(".titulo");
titulos.innerHTML=PrinceApp.title();

var PiePagina=document.querySelector('.PiePagina');					
	PiePagina.innerHTML=PrinceApp.piepagina();



function Activar(active,item){
	$(".active").removeClass('active')
	$("#"+active).addClass('active');
	$(".tituloItems").html(item);

	if(active==1){
		
		ObtenerFiltro(active, item);
	}else if(active==2){
		ObtenerFiltro(active, item);
	}else if(active==3){
		ObtenerFiltro(active, item);
	}else if(active==4){
		ObtenerFiltro(active, item);
	}else if(active==5){

		ObtenerFiltro(active, item);
	}else if(active==6){

		ObtenerFiltro(active, item);
	}
}

function ObtenerFiltro(active, item){
	var items={'height':'height:100px', 'Items':item};
	var filtros=document.querySelector('.filtros');					
	filtros.innerHTML=PrinceApp.filtros(items);
	var filtros=document.querySelector('.Cuerpo');					
	filtros.innerHTML=PrinceApp.cuerpo(items);
	var filtrosP=document.querySelector('.filtrosP');

	switch(active){	
		case 3:{
			var Body=document.querySelector('.panelBody');
			
			var itemEmpresa=[
				{"Empresa":"Empresa 1", "url":"https://www.Empresa1.com","VtAnual":5000000,"CosAnual":2300000},
				{"Empresa":"Empresa 2", "url":"https://www.Empresa2.com","VtAnual":8000000,"CosAnual":5000000}
			];

			filtrosP.innerHTML=PrinceApp.filtroCompetidores({itemEmpresa});
			Body.innerHTML=PrinceApp.ExploraCompe();
		}break;
		case 4:{
			var ProveedoresItem=[
				{"Proveedor":"Proveedor 1", "Material":"Material 1","Marca":"Marca 1","Precio":2000},
				{"Proveedor":"Proveedor 2", "Material":"Material 1","Marca":"Marca 2","Precio":2100},
				{"Proveedor":"Proveedor 3", "Material":"Material 1","Marca":"Marca 1","Precio":2050},
				{"Proveedor":"Proveedor 4", "Material":"Material 1","Marca":"Marca 3","Precio":1950},
				{"Proveedor":"Proveedor 1", "Material":"Material 2","Marca":"Marca 1","Precio":5100},
				{"Proveedor":"Proveedor 1", "Material":"Material 3","Marca":"Marca 2","Precio":5400},
				{"Proveedor":"Proveedor 2", "Material":"Material 3","Marca":"Marca 1","Precio":6400}
				
			];

			var Body=document.querySelector('.panelBody');
			Body.innerHTML=PrinceApp.Proveedores({ProveedoresItem});

			filtrosP.innerHTML=PrinceApp.FiltroProveedores();			 
	 		noUiSlider.create(document.querySelector(".filterSliders"), {
		 		start:[0,5000000],
		 		connect:true,
		 		step:1,
		 		range:{
		 			'min':0,
		 			'max':1000000
		 		},
		 		format:wNumb({
		 			decimals:0
		 		})
		 	})
			  $('select').material_select();
		}break;
		case 5:{
			var menuFiltros=[
				{"On":"Desplegar2(1)","Opcion":"Costos Operacionales","Opc":1, "class":"col s12 m12 l6  center-align valign-wrapper  heightFiltros", "btn":"btn btn-success grey darken-1"},
				
				{"On":"Desplegar2(3)","Opcion":"Gráficas de Costos","Opc":3, "class":"col s12 m12 l6  center-align valign-wrapper  heightFiltros", "btn":"btn btn-success grey darken-1"}

			];
					
			filtrosP.innerHTML=PrinceApp.filtrosCosto({menuFiltros});
		}break;

		case 6:{
			var menuFiltros=[
				{"On":"Desplegar(4)","Opcion":"Inventario","Opc":4, "class":"col s12 m12 l3  center-align valign-wrapper  heightFiltros", "btn":"btn btn-success grey darken-1"},
				{"On":"Desplegar(5)","Opcion":"Catálogo","Opc":5, "class":"col s12 m12 l3  center-align valign-wrapper  heightFiltros", "btn":"btn btn-success grey darken-1"},
				{"On":"Desplegar(6)","Opcion":"Clientes","Opc":6, "class":"col s12 m12 l3  center-align valign-wrapper  heightFiltros", "btn":"btn btn-success grey darken-1"},
				{"On":"Desplegar(7)","Opcion":"Promociones","Opc":7, "class":"col s12 m12 l3  center-align valign-wrapper  heightFiltros", "btn":"btn btn-success grey darken-1"}
			];
					
			filtrosP.innerHTML=PrinceApp.filtrosCosto({menuFiltros});
		}break;
	}
	/*
	
	*/
	
}

function Desplegar(opc){
	var Body=document.querySelector('.panelBody');

	var Productos=[
				{"Exixtencias":15, "Producto":"Producto1", "precio":2000, "Descripcion":"Esta es una breve Descripcion 1", "Promocion":"Descripción de la promoción" },
				{"Exixtencias":20, "Producto":"Producto2", "precio":3000, "Descripcion":"Esta es una breve Descripcion 2","Promocion":"Descripción de la promoción" },
				{"Exixtencias":25, "Producto":"Producto3", "precio":5000, "Descripcion":"Esta es una breve Descripcion 3", "Promocion":"Descripción de la promoción" },
				{"Exixtencias":40, "Producto":"Producto4", "precio":2500, "Descripcion":"Esta es una breve Descripcion 4", "Promocion":"Descripción de la promoción" },
				{"Exixtencias":60, "Producto":"Producto5", "precio":7000, "Descripcion":"Esta es una breve Descripcion 5", "Promocion":"Descripción de la promoción" },
				{"Exixtencias":55, "Producto":"Producto6", "precio":8000, "Descripcion":"Esta es una breve Descripcion 6", "Promocion":"Descripción de la promoción" },
				{"Exixtencias":90, "Producto":"Producto7", "precio":4000, "Descripcion":"Esta es una breve Descripcion 7", "Promocion":"Descripción de la promoción" },
				{"Exixtencias":35, "Producto":"Producto8", "precio":6500, "Descripcion":"Esta es una breve Descripcion 8", "Promocion":"Descripción de la promoción" },
			];
	var clientes=[
				{"Nombre":"Julio", "Apellido":"Lopez", "Direccion":"Cll 20 # 14-17", "Telefono":"3219749473" },
				{"Nombre":"Andres", "Apellido":"Cepeda", "Direccion":"Cll 11 # 24-47", "Telefono":"3127493529" },
				{"Nombre":"Carlos", "Apellido":"Sanchez", "Direccion":"Cr 80 # 54-19", "Telefono":"3124073026" },
				{"Nombre":"Maria", "Apellido":"Figueredo", "Direccion":"Cr 34 # 29-57", "Telefono":"3142050401" },
				{"Nombre":"Luisa", "Apellido":"Becerra", "Direccion":"Cll 8 # 15-18", "Telefono":"3112266394" },
				{"Nombre":"Pedro", "Apellido":"Gomez", "Direccion":"Cll 66 # 81-24", "Telefono":"3217373920" },
				{"Nombre":"Camila", "Apellido":"Tamayo", "Direccion":"Cr 55 # 10-05", "Telefono":"3146563078" },
				{"Nombre":"Carolina", "Apellido":"Barrera", "Direccion":"Cll 15 # 44-37", "Telefono":"3210003855" },
			];

	
	
	if(opc==4){
		var Inventario={Productos,"opcBody":{InventB:"1"}};
		
		Body.innerHTML=PrinceApp.bodyIventario(Inventario)
	}else if(opc==5){
		var Inventario={Productos,"opcBody":{InventB:"2"}};
		Body.innerHTML=PrinceApp.bodyIventario(Inventario)
	}else if(opc==6){
		var Inventario={clientes,"opcBody":{InventB:"3"}};
		Body.innerHTML=PrinceApp.bodyIventario(Inventario)
	}else if(opc==7){
		var Inventario={Productos,"opcBody":{InventB:"4"}};
		Body.innerHTML=PrinceApp.bodyIventario(Inventario)
	}
}

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

$(".button-collapse").sideNav();

/*
1
2
3
4


 */




