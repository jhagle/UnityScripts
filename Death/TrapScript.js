var activateTime : float;
var secondMaterial : Material;
var renderLayer : GameObject;

private var audioClip : AudioSource;
private var soundPlayed : boolean;

function Start () {

	audioClip = GetComponent(AudioSource);
	
	rigidbody.useGravity = false;
}

function Update () {

	if(Time.timeSinceLevelLoad >= activateTime && activateTime != -1)
	{
		RunTrap();
	}
}


function OnCollisionEnter(col : Collision)
{
	
	//print("Piano collided!");
	if(col.transform.tag == "Player")
	{
		PlayEffects();
		col.transform.GetComponent(DeathScript).Kill();
		print("KILLING THE PLAYER");
	}
	if(col.transform.tag == "Ground")
	{
		PlayEffects();
		yield WaitForSeconds(0.4);
		collider.isTrigger = true;
		rigidbody.isKinematic = true;
	}
	
	
}

function RunTrap()
{
	rigidbody.useGravity = true;
}

function PlayEffects()
{
	if(!soundPlayed)
	{
		audioClip.Play();
		soundPlayed = true;
		if(secondMaterial !=null)
		{
			renderLayer.renderer.material = secondMaterial;
			print("setting material to secondmaterial!");
		}
		else
		{
		print("setting material to secondmaterial!");
		}
	}
}