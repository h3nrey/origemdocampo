using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
public class HomopoloSimulation : MonoBehaviour
{
    [SerializeField] GameObject forceGameObject;
    bool isForced = false;
    bool isRunning = false;
    
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void ShowForce() {
        if(isForced) {
            forceGameObject.SetActive(false);
            isForced = false;
        } else if(!isForced) {
            forceGameObject.SetActive(true);
            isForced = true;
        }
    }

    public void ShowButton(Image buttonImage) {
        if(isRunning)
        {
            buttonImage.color = Color.gray;
            isRunning = false;
        } else if(!isRunning) {
            buttonImage.color = Color.red;
            isRunning = true;
        }
    }
}
