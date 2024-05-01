# Seeing a Bayesian Ghost

## The current experiment:

### Based on:
Friedrich, E. V., Zillekens, I. C., Biel, A. L., O'Leary, D., Seegenschmiedt, E. V., Singer, J., ... & Sauseng, P. (2022). 
Seeing a Bayesian ghost: Sensorimotor activation leads to an illusory social perception. iScience, 25(4), 104068.

### Preregistered hypothesis:
[https://aspredicted.org/75k6h.pdf](https://aspredicted.org/75k6h.pdf)

## Branches:
- main (Pilot 1)
- signal-dots (Pilot 2)
- super-training/massive-training (Experiment 1)


## Development Guide (How to test locally the current experiment):

#### Install and configure XAMPP:
1. [Download XAMPP](https://www.apachefriends.org/download.html) with PHP version 7.3.19
2. Open XAMPP and click "Start" to boot the XAMPP application.
3. Navigate to "Services" and click "Start All" button.
4. Navigate to "Network", select localhost:8080, and click "Enable".
5. Navigate to "Volumes" and click "Mount".

#### Clone the git repository:
6. Open Terminal and navigate to the htdocs directory:
    Mac/Linux:
        cd ~/.bitnami/stackman/machines/xampp/volumes/root/htdocs
    Windows:
        cd C://xampp//htdocs

7. Clone into htdocs:
        git clone https://github.com/santiagocdo/bayesianGhost.git

#### Modifty permissions:
8. Copy this text into your terminal from the htdocs folder (the folder you are already in).
    sudo chmod -R 777 bayesianGhost/
        
#### Start experiment:     
9. Click this URL: [http://localhost:8080/bayesianGhost](http://localhost:8080/bayesianGhost)

### BRAVO! You're a XAMPP master.
