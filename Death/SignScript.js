var activated : boolean;
var node : GameObject;
var nodeStartState : boolean;

var signChime : AudioSource; 
var doorClose : AudioSource; 

var onMaterial : Material;
var offMaterial : Material;

function Start()
{
	node.transform.GetComponent(NodeScript).isEnabled = nodeStartState;
}

function Activate()
{
	if(!activated)
	{
		print("Store open!");
		renderer.material = onMaterial;
		node.transform.GetComponent(NodeScript).isEnabled = true;
		node.transform.GetComponent(NodeScript).waitTime = 3;
		signChime.Play();
		activated = true;
		node.transform.GetComponent(DoorNodeScript).hasFired = false;
	}
	else
	{
		print("Store closed!");
		renderer.material = offMaterial;
		node.transform.GetComponent(NodeScript).isEnabled = false;
		doorClose.Play();
		node.transform.GetComponent(DoorNodeScript).hasFired = true;
		activated = false;
	}
}