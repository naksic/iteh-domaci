export interface FullSubjectDto {
    id: number;
    name: string;
    createdAt: Date;
}

export interface FullDeckDto {
    id: number;
    name: string;
    createdAt: Date;
    subject: FullSubjectDto;
    cardsCount: number;
}