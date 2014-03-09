
private var playerSpeed : float;
var playerWalkSpeed : float;
var playerArialSpeed : float;
var isWaiting : boolean;
var waitFor : float;
var waitTimeStart : float;
var nextNode : GameObject;
var ignoreNodes = new Array();

var cam : GameObject;
var isDead : boolean;
var isOnGround : boolean;

function Start () {
	playerSpeed = playerWalkSpeed;
}

function Update () {

	if(!isDead)
	{
		//cam.transform.position.x = transform.position.x;
		
		
		
		if(!isWaiting)
		{
			if(nextNode.transform.position.x < transform.position.x)
			{
				transform.Translate(-Vector3.right * playerSpeed * Time.deltaTime);
			}
			else if (nextNode.transform.position.x > transform.position.x)
			{
				transform.Translate(Vector3.right * playerSpeed * Time.deltaTime);
			}
			
		
		
		}
		else
		{
			if(Time.time < waitTimeStart + waitFor)
			{
				this.gameObject.GetComponent(AnimationControllerScript).isWalking = false;
			}
			else
			{
				isWaiting = false;
				this.gameObject.GetComponent(AnimationControllerScript).isWalking = true;
			}
		}	
	}
}

function OnTriggerEnter( col : Collider )
{
	if(col.transform.tag == "node")
	{
		
		
		if(col.transform.GetComponent(NodeScript).isEnabled)
		{
			print("Nodescript is enabled, doing stuff...");
			waitFor = col.transform.GetComponent(NodeScript).waitTime;
			waitTimeStart = Time.time;
			isWaiting = true;
			nextNode = col.transform.GetComponent(NodeScript).nextNode;
			ignoreNodes = col.transform.GetComponent(NodeScript).ignoreNodes;
			for(var i : int; i < ignoreNodes.length; i++)
			{
				ignoreNodes[i].transform.GetComponent(NodeScript).isEnabled = false;
				print(ignoreNodes[i] + " is now disabled!");
			}
			print("checking for fireOnce");
			if(col.transform.GetComponent(NodeScript).fireOnce)
			{
				print("fireonce is true, disabling node!");
				col.transform.GetComponent(NodeScript).isEnabled = false;
			}
		}
		else
		{
			if(!col.transform.GetComponent(NodeScript).fireOnce)
			{
				ignoreNodes[i].transform.GetComponent(NodeScript).isEnabled = true;
				print("NodeScript was disabled, is now enabled");
			}
		}
	}
}
/*
function OnCollisionEnter( col : Collision)
{
	if(col.transform.tag == "Ground")
	{
		isOnGround = true;
		playerSpeed = playerWalkSpeed;
	}

}
function OnCollisionExit( col : Collision)
{
	if(col.transform.tag == "Ground")
	{
		isOnGround = false;
		playerSpeed = playerArialSpeed;
	}

}*/