exports.list = function(req, res) {

	    req.db.userstories.find(function(error, userstory){

		if(error) return next(error)

		if(!userstory) return next(new Error('userstory not found!'))

		res.send(userstory)
	})

}
exports.add = function(req, res, next){
	console.log(req.body);
	//if(!req.body || !req.body.name)
		// return next(new Error('No data provided. '))
	// We call and save the task to database
	req.db.userstories.insert({
		title: req.body.title,
		body: req.body.body,
		milestones: req.body.milestones || []		
	}, function(error, story){

		if(error) return next(error);

		if(!story) return next(new Error('failed to save'))
		//Logging is optional
		console.info('Added %s with id=%s', story.title, story._id)		
		// redirect
		res.redirect('/stories')
	})
}

exports.getStoryWithId = function(req, res, next, storyId){

	req.db.userstories.findById(storyId, function(error, story){
		if(error) return next(error);
		if(!story) return next(new Error('Task is not found.'));
		req.story = story;
		return next();
	});
}

