using UnityEngine;
using System.Collections;

public class firstPersonController : MonoBehaviour {
	public float movementSpeed = 4.0f;
	public float mouseSen = 3.0f;
	
	public float jumpSpeed = 10;
	float verticalRotation = 0;
	public float upDownRange = 60.0f;
	
	float verticalVelocity = 0;
	
	CharacterController characterController;
	// Use this for initialization
	void Start () {
	Screen.lockCursor = true;
	characterController = GetComponent<CharacterController>();
	}
	
	// Update is called once per frame
	void Update () {
		//Rotation
		
		float rotLeftRight = Input.GetAxis("Mouse X") * mouseSen;
		transform.Rotate(0, rotLeftRight, 0);
	
		verticalRotation -= Input.GetAxis("Mouse Y") * mouseSen;
		verticalRotation = Mathf.Clamp (verticalRotation, -upDownRange, upDownRange);
		Camera.main.transform.localRotation = Quaternion.Euler(verticalRotation, 0, 0);
		

		//Movement
				
        float forwardSpeed = Input.GetAxis("Vertical") * movementSpeed;
        float sideSpeed = Input.GetAxis("Horizontal") * movementSpeed;
		
		verticalVelocity += Physics.gravity.y * Time.deltaTime;
		if( characterController.isGrounded && Input.GetButton("Jump")){
			verticalVelocity = jumpSpeed;
			sideSpeed = sideSpeed/2;
			forwardSpeed= forwardSpeed/2;
		}
		
		Vector3 speed = new Vector3( sideSpeed, verticalVelocity, forwardSpeed );
		
		speed = transform.rotation * speed;
		
		
		characterController.Move(speed * Time.deltaTime);

	}

}
