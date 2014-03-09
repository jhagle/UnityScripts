var cam : GameObject;

function OnTriggerEnter(col:Collider)
{
	if(col.transform.tag == "Player")
	{
		cam.GetComponent(CameraScript).MoveCamera();
	}

}