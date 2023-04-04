interface Tuser {
  readonly dbId: number;
  email: string;
  userId: number;
  //   startTrail: () => string;
  startTrail(): string;
  getCOupoin(couponname: string, value: number): number;
}

interface Tuser {
  githubToken: string;
}

interface Admin extends Tuser {
  role: 'admin' | 'TA' | 'Learner';
}

const dushi: Admin = {
  role: 'admin',
  dbId: 23,
  githubToken: 'token',
  email: 'sa@h.com',
  userId: 2211,
  startTrail: () => {
    return 'Hello string';
  },
  getCOupoin: (name: 'Deepak11', off: 11) => {
    return 11;
  },
};

dushi.email = 'sd@dushi.com';

export {};
