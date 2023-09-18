export enum AccuracyEnum {
    correct,
    wrongPosition,
    none,
    doesNotExist
}

export const accuracyColorMap = new Map<AccuracyEnum, string>([
    [AccuracyEnum.correct, '#6CA965'],
    [AccuracyEnum.wrongPosition, '#C8B653'],
    [AccuracyEnum.none, 'black'],
    [AccuracyEnum.doesNotExist, '#787C7F'],
])