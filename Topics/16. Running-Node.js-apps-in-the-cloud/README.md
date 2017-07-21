# Running Web applications with Node.js and MongoDB in Amazon Web Services


## Manual

###  Setup of the MongoDB Instance

1.  Create an Ubuntu or Amazon Linux instance
    -   Open AWS console
    -   Create Instance
    -   Select 'ec.micro' instance type
    -   Create and download key pair
        -   **Save it!!!**
    -   Next -> Next -> Next...
2.  Attach Elastic IP
    -   Go to Elastic IPs
    -   Assign new IP to the MongoDB instance
3.  Create a security group `mongodb`
    -   Open TCP port 27017
4.  Add `mongodb` security group to the MongoDB instance
    -   Right click on the instance
    -   Network -> Change security groups
5.  Connect to the AWS instance with ssh 
    -   Right click on the instance
    -   Connect
    -   Paste in terminal supporting ssh
        -   Any *unix terminal
        -   Cygwin/git-bash
6.  Update the instance
    -   `sudo apt update -y && sudo apt upgrade -y`
7.  Install MongoDB 3.6.X
    -   Follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition)
8.  Change the MongoDB IP
    -   Get the current private IP
    -   Change `127.0.0.1` to it in `/etc/mongodb.conf` and `/etc/mongod.conf`
        -   sudo vim `/etc/mongodb.conf`
9.  Run mongod service
    -   `sudo systemctl restart mongod`

###  Setup of the Node.js Instance

1.  Create an Ubuntu or Amazon Linux instance
    -   Open AWS console
    -   Create Instance
    -   Select 'ec.micro' instance type
    -   Create and download key pair
        -   **Save it!!!**
    -   Next -> Next -> Next...
2.  Attach Elastic IP
    -   Go to Elastic IPs
    -   Assign new IP to the Node.js instance
3.  Create a security group `node-app`
    -   Open HTTP port 80
4.  Add `node-app` security group to the Node.js instance
    -   Right click on the instance
    -   Network -> Change security groups
5.  Connect to the AWS instance with ssh 
    -   Right click on the instance
    -   Connect
    -   Paste in terminal supporting ssh
        -   Any *unix terminal
        -   Cygwin/git-bash
6.  Update the instance
    -   `sudo apt update -y && sudo apt upgrade -y`
7.  Install mongodb-org-tools
    -   Follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition)
        -   Install only mongodb-org-tools
8.  Install Node.js 8.X
    -   `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
    -   `sudo apt update -y`
    -   `sudo apt install nodejs`
9.  Install yarn
    -   sudo npm install -g yarn
10. Create app directory
    -   i.e. /var/app
    -   `sudo mkdir -p /var/app`
11. Change app directory ownership to current user
    -   `sudo chown $USER /var/app`
12. Checkout the repository
    -   `git clone http://github.com/.... /var/app`
13. Install app dependencies
    -   `cd /var/app`
    -   `yarn` or `npm install` or `sudo npm install`
14. Update the mongodb connection string to the AWS instance
15. Create a systemd service
    -   Autoruns the service on instance start
    -   Example: https://www.ubuntudoc.com/how-to-create-new-service-with-systemd/
16. You are done

## With Docker

###  Setup of the MongoDB instance

1.  Create an Ubuntu or Amazon Linux instance
    -   Open AWS console
    -   Create Instance
    -   Select 'ec.micro' instance type
    -   Create and download key pair
        -   **Save it!!!**
    -   Next -> Next -> Next...
2.  Attach Elastic IP
    -   Go to Elastic IPs
    -   Assign new IP to the MongoDB instance
3.  Create a security group `mongodb`
    -   Open TCP port 27017
4.  Add `mongodb` security group to the MongoDB instance
    -   Right click on the instance
    -   Network -> Change security groups
5.  Connect to the AWS instance with ssh 
    -   Right click on the instance
    -   Connect
    -   Paste in terminal supporting ssh
        -   Any *unix terminal
        -   Cygwin/git-bash
6.  Update the instance
    -   `sudo apt update -y && sudo apt upgrade -y`
5.  Install docker
6.  Run docker image with exposing ports

### Setup of the Node.js instance

1.  Create an Ubuntu or Amazon Linux instance
    -   Open AWS console
    -   Create Instance
    -   Select 'ec.micro' instance type
    -   Create and download key pair
        -   **Save it!!!**
    -   Next -> Next -> Next...
2.  Attach Elastic IP
    -   Go to Elastic IPs
    -   Assign new IP to the Node.js instance
3.  Create a security group `node-app`
    -   Open HTTP port 80
4.  Add `node-app` security group to the Node.js instance
    -   Right click on the instance
    -   Network -> Change security groups
5.  Connect to the AWS instance with ssh 
    -   Right click on the instance
    -   Connect
    -   Paste in terminal supporting ssh
        -   Any *unix terminal
        -   Cygwin/git-bash
6.  Update the instance
    -   `sudo apt update -y && sudo apt upgrade -y`
5.  Install docker
6.  Run docker image with exposing ports

