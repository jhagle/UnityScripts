#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKey(KeyCode.Escape))
	{
		Application.LoadLevel(0);
	}
	
	if(Input.GetButtonUp("Fire1"))
	{
		Click();
	}
	
	if(Input.GetKey(KeyCode.W))
	{
		Application.LoadLevel(2);
	}
	
	if(Input.GetButtonUp("Jump"))
	{
		Application.LoadLevel(1);
	}
}

function Click()
{
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;
	if (Physics.Raycast (ray, hit)) 
	{
		if(hit.transform.tag == "ActivatedObject")
		{
			print("Hit an object!");
			print("Hit "+hit.transform.name);
			hit.transform.SendMessage("Activate");
		}
	}

}