var activated : boolean;
var player : GameObject;
var node : GameObject;


function Activate()
{
	if(!activated)
	{
		print("Spotlight activated!");
		renderer.material.color = Color.green;
		node.transform.GetComponent(NodeScript).isEnabled = true;
		node.transform.GetComponent(NodeScript).waitTime = 3;
		
		activated = true;
	}
}