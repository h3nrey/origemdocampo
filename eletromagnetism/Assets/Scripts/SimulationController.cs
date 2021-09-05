using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimulationController : MonoBehaviour
{
    public bool isPaused = false;

    private void Awake() {
        Time.timeScale = 0;
        isPaused = true;
    }

    public void RunSimulation() {
        if (isPaused) {
            Time.timeScale = 1;
            isPaused = false;
        }
        else if (!isPaused) {
            Time.timeScale = 0;
            isPaused = true;
        }
    }
}
