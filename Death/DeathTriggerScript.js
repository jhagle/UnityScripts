
function OnTriggerEnter( col : Collider )
{
	if(col.transform.tag == "Player")
	{
		print("Player hit a death zone.");
		col.gameObject.GetComponent(DeathScript).Kill();
	}
	if(col.transform.tag == "Rat")
	{
		print("Rat hit a death zone.");
		col.gameObject.GetComponent(RatScript).Kill();
	}
}