FreeCAD
===



## Hello FreeCAD

For this first project we will make a puck for an Air-Hockey Table.



### Open the Python Console

In the menu go to View -> Views -> Python Console to gain python access to control the CAD.



### Make a 2D Circle
```python
import Part

myBox = Part.makeBox(5,5,5)
Part.show(myBox)
```



<p align="center">
<img src="http://i1347.photobucket.com/albums/p711/gregorykielian/ScreenShot2013-08-18at111112PM_zps8fb95f89.png?t=1376892714">
</p>



### Make a Cylinder
```python
import Part
from FreeCAD import Base

myCircle = Part.makeCircle(10)
Part.show(myCircle)
myCyl = myCircle.extrude(Base.Vector(0,0,10))
Part.show(myCyl)
```







