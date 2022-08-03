import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

@Injectable()
export class UserService {
  constructor(private readonly sequelize: Sequelize) {}

  async insertUser(data) {
    const { name, mail, pass } = data;
    const insertQuery =
      'INSERT INTO user (name, mail, pass) VALUES (:name, :mail, :pass)';

    await this.sequelize.query(insertQuery, {
      replacements: {
        name: name,
        mail: mail,
        pass: pass,
      },
      type: QueryTypes.INSERT,
    });

    return data;
  }

}
