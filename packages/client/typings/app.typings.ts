export enum EnemiesList {
  GOBLIN = 'GOBLIN',
  HOBGOBLIN = 'HOBGOBLIN',
  ORC = 'ORC',
  ORC_WARRIOR = 'ORC_WARRIOR',
}

export type EnemyType = keyof typeof EnemiesList;

export enum TowersList {
  ARCHER = 'ARCHER',
  STONE = 'STONE',
}

export type TowerType = keyof typeof TowersList;

export type TowerListItemType = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  isDragging: boolean;
  imageSrc: string;
  type: TowersList;
};

export type TGameSettings = {
  tileSize: number;
  width: number;
  height: number;
  hearts: number;
  coins: number;
  waves: {
    enemies: {
      type: EnemyType;
      count: number;
      waveCount: number;
    }[];
  }[];
  towers: TowerType[];
  placementTiles: number[];
  waypoints: {
    x: number;
    y: number;
  }[];
};

export type TEnemySettings = {
  width: number;
  height: number;
  radius: number;
  health: number;
  speed: number;
  imageSrc: string;
  coins: number;
  points: number;
};

export type TBuildingSettings = {
  radius: number;
  delay: number;
  imageSrc: string;
  cost: number;
  maxFrames: number;
  projectile: {
    imageSrc: string;
    radius: number;
    damage: number;
  };
};

export type State = {
  game: GameState;
};
export type GameState = {
  points: number;
};

export type UserInfo = {
  id: string;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  avatar: string | null;
  email: string | null;
  phone: string | null;
};

export type LoginType = {
  login: string;
  password: string;
};
export type ChangeProfileType = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
};

export type ChangePasswordType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type ProfileType = {
  first_name: string;
  second_name: string;
  login: string;
  password: string;
  confirmPassword: string;
};

export type LeaderboardResponse = {
  data: Record<'data', LeaderboardUserType>[];
  status: number;
  statusText: string;
};

export type LeaderboardUserType = {
  id: number;
  first_name: string;
  second_name: string;
  towerDefenceScore: number;
  order?: number;
  avatar?: string;
};

export type LeaderboardType = LeaderboardUserType[] | [];

export type pushLeaderboardRequest = {
  score: number;
};

export type APIResponseError = {
  response: {
    data: {
      reason: string;
    };
    status: number;
  };
};
