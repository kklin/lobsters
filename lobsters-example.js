// This is an example of how to use the Lobsters spec to deploy
// Lobsters to a single Amazon instance.

var lobsters = require("github.com/quilt/lobsters")

var deployment = createDeployment();
// To use this example, change this to your RSA public key.
var sshPublicKey = "pubKey";
var baseMachine = new Machine({provider: "Amazon", sshKeys: ["ssh-rsa " + sshPublicKey]});

deployment.deploy(baseMachine.asMaster());
deployment.deploy(baseMachine.asWorker());

// Deploy lobsters with "mysqlRootPassword" as the SQL root password.
// In the future, Quilt will have improved functionality for secrets.
// Currently, SQL is only accessible from other containers in the cluster,
// which limits the risk of this.
lobsters.Deploy(deployment, "mysqlRootPassword");


