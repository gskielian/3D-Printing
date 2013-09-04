// Credits to Elkniwt for design https://tinkercad.com/users/56XAnSz2Njk/
// i added some comments to guide my students/friends through the code

/*The Params decide what is displayed in the menu when you create your own custom shape*/
params = [
  { "id": "ID", "displayName": "Inner Diameter", "type": "float", "rangeMin": 1, "rangeMax": 100, "default": 4.0 },
  { "id": "OD", "displayName": "Outer Diameter", "type": "float", "rangeMin": 1, "rangeMax": 100, "default": 20.0 }
]

	//1. create a 2d shape
		//a. create outer circle
		//b. create inner circle
	//2. expand into 3D (give it height) aka extrusion
	
function process(params) {
	//creating a 2D Shape
  var path = new Path2D();
  var twopi = 2.0 * Math.PI;
	//setting the two radiuses
  var r1 = params["ID"]/2.0;
  var r2 = params["OD"]/2.0;
  var lod1 = Tess.circleDivisions(r1);
  var lod2 = Tess.circleDivisions(r2);
  var step1 = twopi / lod1;
  var step2 = twopi / lod2;
  
	
	//create outer circle
   path.moveTo(r2,0);
  for(var a = 0.0; a < twopi; a += step2) {
    path.lineTo(Math.cos(a)*r2, Math.sin(a)*r2);
  }
	//close the circle
  path.lineTo(r2,0);
	//end create outer circle
	
	//create inner circle
  path.lineTo(r1,0);
  for(var a = 0.0; a < twopi; a += step1) {
    path.lineTo(Math.cos(a)*r1, -Math.sin(a)*r1);
  }
	//seal it up
  path.lineTo(r1,0);
	//end create inner circle
  path.close();
	
	//give it height
  return Solid.extrude([path], 20);
}
