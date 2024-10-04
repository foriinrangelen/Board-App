

import { Board } from 'src/entity/board.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension'

export default class BoardSeeder implements Seeder {
    async run(dataSource:DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        
        const repository = dataSource.getRepository(Board);
        for(let i=0; i<=20; i++){
            await repository.insert([{
                userId: `kyy8629`,
                contents: `내용${i}`,
                title: `제목${i}`
            },])
        }

    }

}