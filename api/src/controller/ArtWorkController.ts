import express, { Request, Response, NextFunction } from "express";
import { ArtWork } from "../entity/artWork";
import { getRepository, getConnection } from "typeorm";

export const addArtWork = async (req: express.Request, res: express.Response) => {
  // console.log("REQ", req);
  console.log("req.BODY", req.body);
  console.log('***getConnection()', getConnection().options)
  const artWorkRepository = getConnection().getRepository(ArtWork);
  const { body } = req;
  try {
    const artWork = await artWorkRepository.query(
      `INSERT INTO public.art_work (name, description, "imageUrl", type, size, views, "isPublished", "isAvailable")
      VALUES ('${body.name}', '${body.description}', '${body.imageUrl}', '${body.type}','${body.size}','${body.views}','${body.isPublished}','${body.isAvailable}');`
    );
    res.json(artWork);
  } catch (error) {
    res.send(error);
  }
};
export const getArtWorks = async (req: express.Request, res: express.Response) => {
  // console.log("REQ", req);
  console.log("req", req);
  const artWorkRepository = getRepository(ArtWork);
  const { body } = req;
  try {
    const artWork = await artWorkRepository.query(
      `SELECT * FROM public.art_work`
    );
    res.json(artWork);
  } catch (error) {
    res.send(error);
  }
};

