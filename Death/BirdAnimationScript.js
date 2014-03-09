var materials : Material[];
var renderLayer : GameObject;
var flyDone : boolean;
var isFlying : boolean;
var isLanding : boolean;


function Update () 
{
	if(isFlying)
	{
		PlayFlyCycle();
	}
	else if(isLanding)
	{
		PlayLandCycle();
	}
	else
	{
		renderer.material = materials[4];
	}
}

function PlayFlyCycle()
{
	if(flyDone)
	{
		flyDone = false; //without this, it always just plays the first frame
		renderer.material = materials[0];	//Step1
		yield WaitForSeconds(0.1);
		renderer.material = materials[1];	//Step1
		yield WaitForSeconds(0.1);
		flyDone = true;
	}
	
}

function PlayLandCycle()
{
	if(flyDone)
	{
		flyDone = false; //without this, it always just plays the first frame
		renderer.material = materials[0];	//Step1
		yield WaitForSeconds(0.1);
		renderer.material = materials[1];	//Step1
		yield WaitForSeconds(0.1);
		flyDone = true;
	}
	
}
