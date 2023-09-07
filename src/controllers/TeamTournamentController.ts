import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient";


/*


PRECISA DESSE CONTROLLER SERÁ?



*/

export class TeamTournamentController {
  async createTeam (req : Request, res : Response) {
    try {
      const {id_team, id_tournament} = req.body

      if (id_team && id_tournament) {
        const teamTournament = await prismaClient.teamTournament.create({
          data: {
            id_team,
            id_tournament
          }
        })
        return res.status(201).json(teamTournament)
      } else {
        return res.status(400).json('Invalid data')
      }
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deleteTeam (req : Request, res : Response) {
    try {
      //code to delete
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async updateTeam (req : Request, res : Response) {
    try {
      //code to update
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findTeam (req : Request, res : Response) {
    try {
      //code to find
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllTeams (req : Request, res : Response) {
    try {
      const teamTournaments = await prismaClient.teamTournament.findMany();
      return res.status(200).json(teamTournaments)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}