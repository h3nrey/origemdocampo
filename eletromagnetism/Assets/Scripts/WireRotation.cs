using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WireRotation : MonoBehaviour
{
    [SerializeField] float rotationRate;
    [SerializeField] Vector3 eixo;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        this.transform.Rotate(eixo, rotationRate * Time.deltaTime);
    }
}
