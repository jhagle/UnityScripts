var materials : Material[];
var renderLayer : GameObject;
var walkDone : boolean;
var idleDone : boolean;
var isWalking : boolean;

var frameDelay : float;
var frameStart : float;
var currentMat : Material;

function Start () {
	currentMat = renderLayer.renderer.material;
}

function Update () 
{
	if(Time.time >= frameStart+frameDelay)
	{
		frameStart = Time.time;
		
	
		if(isWalking)
		{
			PlayWalkCycle();
		}
		else
		{
			print("Is not walking, playing idle cycle");
			PlayIdleCycle();
		}
		renderLayer.renderer.material = currentMat;
	}
}

function PlayWalkCycle()
{

		//walkDone = false; //without this, it always just plays the first frame
		if(currentMat == materials[0])
		{
			currentMat = materials[1];
		}
		else if(currentMat == materials[1])
		{
			currentMat = materials[2];
		}
		else if(currentMat == materials[2])
		{
			currentMat = materials[3];
		}
		else
		{
			currentMat = materials[0];
		}

	
}

function PlayIdleCycle()
{
	if(currentMat == materials[4])
		{
			currentMat = materials[5];
			print("currentmat = 4, changing to 5");
		}
		else if(currentMat == materials[5])
		{
			currentMat = materials[6];
			print("currentmat = 5, changing to 6");
		}
		else if(currentMat == materials[6])
		{
			currentMat = materials[7];
			print("currentmat = 6, changing to 7");
		}
		else
		{
			currentMat = materials[4];
			print("currentmat = ?, changing to 4");
		}
}