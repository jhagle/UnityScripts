var isActive : boolean;
var speed : float;
var walkSpeed : float;
var flySpeed : float;
var mat1 : Material;
var mat2 : Material;
var startTime : float;
var blood : GameObject;
private var runDone : boolean;
var contacts : int;

function Start () {

	this.renderer.enabled = false;
	this.collider.isTrigger = true;
	this.rigidbody.isKinematic = true;
	runDone = true;
	speed = walkSpeed;
}

function Update () {

	
	if(Time.timeSinceLevelLoad >= startTime)
	{
		this.renderer.enabled = true;
		this.collider.isTrigger = false;
		this.rigidbody.isKinematic = false;
		isActive = true;
	}
	if(isActive)
	{
		transform.Translate(Vector3.right * speed * Time.deltaTime);
		Animate();
	}
	if(contacts == 0)
	{
		
		isOnGround = false;
		speed = flySpeed;
	}
	else
	{
		
		isOnGround = true;
		speed = walkSpeed;
		
	}
}

function Kill()
{
	Instantiate(blood,transform.position,transform.rotation);
	Destroy(this.gameObject);
}

function OnCollisionEnter(col : Collision)
{
	if(col.transform.tag == "Player")
	{
		col.transform.GetComponent(DeathScript).Kill();
		print("KILLING THE PLAYER");
	}
	
	if(col.transform.tag == "Ground" || col.transform.tag =="ActivatedObject")
	{
		contacts++;
	}
}

function Animate()
{
	if(runDone)
	{
		runDone = false;
		renderer.material = mat1;
		yield WaitForSeconds(0.1);
		renderer.material = mat2;
		yield WaitForSeconds(0.1);
		runDone = true;
	}
}

function OnCollisionExit( col : Collision)
{
	if(col.transform.tag == "Ground" || col.transform.tag =="ActivatedObject")
	{
		contacts--;
	}

}