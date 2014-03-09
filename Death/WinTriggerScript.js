#pragma strict

function OnTriggerEnter( col : Collider )
{
	if(col.transform.tag == "Player")
	{
		print("Player won! Loading win screen...");
		col.gameObject.GetComponent(PlayerMovementScript).isWaiting = true;
		yield WaitForSeconds(2);
		Application.LoadLevel(2);
	}
}