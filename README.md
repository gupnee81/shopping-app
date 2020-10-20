# Shopping App 
This react based front end application demonstrates a small functionality of calculating the cost of a shopping cart on an e-commerce portal. 
It deals with 3 products which are created locally as part of the initialisation and frontend fetches it at the time of the launch.   

It contains a docker-compose file which will be used to deploy the frontend service seemlessly on any given machine i.e. desktop, virtual machine etc.

Here is the price list to begin with..
| PRODUCT ID |   PRODUCT NAME     |     PRICE |
| --- | :--------- | --------: |
| wf | Workflow  |  \$199.99 |
| mbp | Document Generation | \$9.99 |
| docgen |  Form   |  \$99.99 |

Some discounts are offered and these are listed below .

| PROMO CODE	| DESCRIPTION |
| --- | :--------- |
RRD4D32	| 10% discount for orders above $1000 (pre-discount) |
44F4T11	| 15% discount for orders above $1500 (pre-discount) |
FF9543D1 | Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased |
YYGWKJD	| Reduces the form price to $89.99 a unit when at least 1 wf is purchased |

For simplicity sake, only one promotion code can be applied at a time.

## Example scenarios
### **Scenario 1**

**Products:**	2x wf

**Promotion:** 

**Total:**	$399.98
 	 
### **Scenario 2**
**Products:**	6x wf

**Promotion:**	RRD4D32

**Total:**	$1,079.94
 	 
### **Scenario 3**

**Products:**	1x wf, 1x form
**Promotion**:	YYGWKJD
**Total:**	$289.98

## Getting Started
### Clone the repo and install the project

- git clone https://github.com/gupnee81/shopping-app.git
- cd shopping-app

**Further setup steps**

1. Run following commands
   ### `yarn start`
   Runs the app in the development mode.<br />
   Open [http://localhost:3000/products](http://localhost:3000/products) to view it in the browser.

   ### `yarn build`

  Builds the app for production to the `build` folder.<br />
  It correctly bundles React in production mode and optimizes the build for the best performance.
  Your app is ready to be deployed!

## Features
1. React, React-Hooks
2. Rules are NOT HARDCODED and seperated in a ./src/utils/pricingrule.ts and made it configurable


## Not addressed
1. Jest based Unit testing