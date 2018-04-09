var GitHub=require('github-api');
var prompt=require('prompt');
const { spawn } = require('child_process');

prompt.start();

prompt.get(['username', 'password'], (err, { password, username }) => {
	if (err) { return onErr(err); }
	// console.log(clayreimann);

	const gh = new GitHub({
		username,
	      password
	});

	console.log({ gh });

	const user  = gh.getUser();

	user.listRepos((err, repos) => {
		// look at all the starred repos!
		console.log({ repos });
		repos.map((repo) => {
		console.log(repo.url);	
		 spawn('git',['clone',repo.clone_url], {pwd :'~./repo/'});	
		})
	});


})
