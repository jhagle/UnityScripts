var enterTime : float;
var exitTime : float;
var door : GameObject;
var waitTime : float;
//var doorMatClosed : Material;
//var doorMatOpen : Material;
private var startTime : float;
private var player : GameObject;
var hasFired : boolean;

function Update()
{
	if(!hasFired)
	{
		if(Time.time < startTime+waitTime && startTime != 0)
		{
			if(Time.time - startTime >= enterTime - 0.5)
			{
				door.renderer.enabled = true;
				if(Time.time - startTime >= enterTime)
				{
					player.transform.position.z = 5;
					if(Time.time - startTime >= enterTime + 0.5)
					{
						door.renderer.enabled = false;
						if(Time.time - startTime >= exitTime - 0.5)
						{
							door.renderer.enabled = true;
							if(Time.time - startTime >= exitTime)
							{
								hasFired = true;
								player.transform.position.z = 0;
								}}}}}}}
								if(Time.time - startTime >= exitTime + 0.5)
								{
									door.renderer.enabled = false;
									
			}
		
		
	

}

function OnTriggerEnter(col:Collider)
{
	if(!hasFired)
	{
		if(col.transform.tag == "Player")
		{
			startTime = Time.time;
			player = col.gameObject;
		}
	}
}