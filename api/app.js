const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const { Team, TeamInformation } = require('./db/models');

/*var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
*/
/* MIDDLEWARE  */
// Load middleware
app.use(bodyParser.json());

//CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});



/**
 * GET /team
 * Purpose: Get all players
 */
app.get('/team', (req, res) =>{
    //res.send("Hello world");  
    //return a array of all team in the db
    Team.find({}).then((teams) => {
        res.send(teams);        
     });      
})

/**
 * POST /team
 * Purpose: Create a player information
 */
app.post('/team', (req, res) =>{
    // we want to create the new list document back to the user     

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;


    let newTeam = new Team({
        first_name,
        last_name
    });

    newTeam.save().then((listDoc) => {
        // the full list document is returned (incl. id)
        res.send(listDoc);
    })
})



/**
 * PATCH /team/:id
 * Purpose: Update a specified team information
 */
app.patch('/team/:id', (req, res) => {
    // We want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
    Team.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.send({message: 'Updated Succesfully'});
    });
});

/**
 * DELETE /team/:id
 * Purpose: Delete a team member
 */
app.delete('/team/:id', (req, res) => {
    // We want to delete the specified team member (document with id in the URL)
    Team.findOneAndRemove({
        _id: req.params.id
    }).then((removedTeamDoc) => {
      res.send(removedTeamDoc);

    // delete all the tasks that are in the deleted list
     //   deleteTasksFromList(removedListDoc._id);
    })
});

/**
 * GET /team/:teamId/teaminformation/:teaminformationId
 * Purpose: Get all teaminformation in a specific teaminformation
 * http://localhost:3000/team/5fce71993cadfc9571358e57/teaminformation/5fce792359a5277e7997fc56
 */
app.get('/team/:teamId/teaminformation/:teaminformationId', (req, res) => {
    // We want to return all tasks that belong to a specific list (specified by listId)
    TeamInformation.findOne({
        _id: req.params.teaminformationId,
        teamId: req.params.teamId
    }).then((teaminformation) => {
        res.send(teaminformation);
    })
});


/**
 * GET /team/:teamId/teaminformation
 * Purpose: Get all tasks in a specific list
 * http://localhost:3000/team/5fce71993cadfc9571358e57/teaminformation
 */
app.get('/team/:teamId/teaminformation', (req, res) => {
    // We want to return all tasks that belong to a specific list (specified by listId)
    TeamInformation.find({
        teamId: req.params.teamId
    }).then((teaminformation) => {
        res.send(teaminformation);
    })
});

/**
 * POST /team/:teamId/teaminformation
 * Purpose: Create a new task in a specific list
 * http://localhost:3000/team/5fce7a04175d762591549089/teaminformation
 */
app.post('/team/:teamId/teaminformation', (req, res) => {
    // We want to create a new task in a list specified by listId

          let newTeamInformation = new TeamInformation({
            team:  req.body.team,
            minutes_playes: req.body.minutes_playes,
            goals : req.body.goals,
            assists : req.body.assists,
            yellow_cards : req.body.yellow_cards,
            red_card : req.body.red_card,
            pass : req.body.pass,
            aerialsWon : req.body.aerialsWon,
            man_of_the_match : req.body.man_of_the_match,
            rating : req.body.rating,
            shots_per_game : req.body.shots_per_game,
            teamId: req.params.teamId

            });
            newTeamInformation.save().then((newTeamInformationDoc) => {
                res.send(newTeamInformationDoc);
            })
    })

/**
 * PATCH /team/:teamId/teaminformation/:teaminformationId
 * Purpose: Update an existing task
 * http://localhost:3000/team/5fce7a04175d762591549089/teaminformation/5fce7a36175d76259154908a
 */
app.patch('/team/:teamId/teaminformation/:teaminformationId', (req, res) => {
    // We want to update an existing task (specified by taskId)

            TeamInformation.findOneAndUpdate({
                _id: req.params.teaminformationId,
                teamId: req.params.teamId
            }, {
                    $set: req.body
                }
            ).then(() => {
                res.send({message: 'Updated Succesfully'});
            })
});

/**
 * DELETE //team/:teamId/teaminformation/:teaminformationId
 * Purpose: Delete a task
 * http://localhost:3000/lists/5fc3f7b5e4e0ce9394085d4d/tasks/5fc3f877acc303780820db3c
 */
app.delete('/team/:teamId/teaminformation/:teaminformationId', (req, res) => {

    TeamInformation.findOneAndRemove({
        _id: req.params.teaminformationId,
        teamId: req.params.teamId
           }).then((removedTeamInformationDoc) => {
               res.send(removedTeamInformationDoc);
           })
       });

app.listen(3000, () => {
    console.log("Server is listening on port 3000");    
})