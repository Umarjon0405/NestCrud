import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: bigint;

    @Column({ unique: true })
    fullname: string;

    @Column({ nullable: true })
    age: number;

    @Column({nullable: true, type: "bigint"})
    city_id: bigint;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}