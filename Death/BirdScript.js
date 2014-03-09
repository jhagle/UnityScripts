var activated : boolean;
var treeBranch : GameObject;
var pointB : Vector3; 
var pointC : Vector3;
var x : int;
var activateTime : float;
var pigeonCoo : AudioSource;

function Update()
{
	if(Time.timeSinceLevelLoad >= activateTime)
	{
		Activate();
	}
}

function Activate()
{
	if(!activated)
	{
		print("bird activated!");
		//pointB = Vector3(10.2,5.2,0);
		
		pigeonCoo.Play();
		activated = true;
		print("moveobj 1");
		yield MoveObject( transform.position, pointB, 4);
		print("moveobj 2");
		activated = true;
		MoveObject(transform.position, pointC, 12.0);
		
	}
}

function MoveObject ( startPos : Vector3, endPos : Vector3, time : float) 
{
	this.gameObject.GetComponent(BirdAnimationScript).isFlying = true;
    while(activated)
    {
	    var i = 0.0;
	    var rate = 7.0/time;
	    
	    while (i < 1.0) 
	    {
	   
	        i += Time.deltaTime * rate;
	        transform.position = Vector3.Lerp(startPos, endPos, i);
	        yield;
	        activated = false;
	    }
	    
	    this.gameObject.GetComponent(BirdAnimationScript).isFlying = false;
	    
	    if(x == 0)
	    {
		    this.gameObject.GetComponent(BirdAnimationScript).isLanding = true;
		    treeBranch.GetComponent(TrapScript).RunTrap();
		    x++;
	    }
    
    }
    return;
}