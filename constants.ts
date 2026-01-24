
import { Book, Review } from './types';

export const BOOKS: Book[] = [
  {
    id: 'aristotle',
    title: '아리스토텔레스의 시학',
    author: '아리스토텔레스',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6498UrUH-KlIdD27OI7M9ofcV3bFCbxKrH1wRr12T6nf5cMPySCjdZhensLbDVQx9x3Smny8nO7GXgRx0Uxw2cLrtk8gZLuBJdZcny7OmzwwrZ2mAG4cp63TZuXZvA5YIq1uDh0qHam7IXNloEPwFLM2wjC5kZQi_9shzztRYQJCNNF0E2dCDkUtSyQDHIycBctr5RXvnggeu-5FFuuDZXePA_JAYxsbVz9STWtYLa_OyKSjGt-TpYLqV7JuYpYFHm_zXHZPd0CM',
  },
  {
    id: 'on-liberty',
    title: '자유론',
    author: '존 스튜어트 밀',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvxfacTi72ebeGTpWMoFOJxsE6SaDPYmEl7NwD9dwb9a12q2FZrQPuM8yRGBAsGSNd58SNGauHYbtKM8zaGoPZ6_r0iwgYhrymdRgoPswxYUmcfBXae3dUgRwFHAS5Z1e9h304DBehzf1mnK2e0w6bEtesFmHKKue9aq0f6EbVDwe3jHBlHYlF4JPffgr6LtPsDGL2OEHPHHR-xmtO5IB37Gqs6r6Vsip2ZzdRfAqaSkThAMF6Q-S0HZci-_PEf-hf_Ql107N7xoY',
  },
  {
    id: 'becoming-cyborg',
    title: '사이보그가 되다',
    author: '김초엽',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDns65Ac-PCA7PCqXoo82Npe9hS7AzzYztqhDi9qpVBe8rBr9ZmTv34SpDKBFPa7oq9rVIU91CCtkqwIEfydmDF65q1c2Ii2HKKPfKJo2VjA_yLMq-575sqwiHv2c0BXsNd0oOiNhJXg7ix1lXbMV0eMKSxVInth3MVPGjqk1te-GYKHSIfHQ3SJzDZDjlUPHuMgJwTivT5F1KK-BWfllhQlfx_nvcsPaideTBvcxmLd9dAw5SMSbOz-2vAHt4el2EROmcJH5u95nw',
  },
  {
    id: 'hail-mary',
    title: '프로젝트 헤일메리',
    author: '앤디 위어',
    category: 'SF / Thriller',
    description: "인류의 멸망을 막기 위해 머나먼 우주로 홀로 떠난 과학자 라일랜드 그레이스의 고군분투를 다룹니다. 절망적인 상황 속에서도 과학적 사고와 우정을 통해 희망을 찾아가는 과정을 흥미진진하게 그려내며, '협력'과 '지성'의 가치를 탐구합니다.",
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsJPoFVrv8r_kn-9myJzk4GXVejktqfZf1v727C4xT389qllddCzggBmfYaOQc7eZVppytsxx5G1f9SrxZW0It6gcgmn5z_zqbLwlbeVZIj5eJ_ASMN_sg4pGOc5qdSSWbMfAiQ38NQwBCZyEFzV5HrtbhCyCXBLlpcc98AFkTtKqP16lszXmdzGTR-XIowcRh_GKyl682Hdi_yhYbp_OeRo7-rxnJ6CsKO9TMJonNiZ5ZA3RhaArdZJs_LQiEXt973VumlxlNgcw',
  },
  {
    id: 'pride-prejudice',
    title: '오만과 편견',
    author: '제인 오스틴',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALvq5E3n8_H8u0_-xPx4A8sVzObl-4NOQgdMHz0B0ZiiglBTWgCEqHN0ldfX_uQ6j6lb1hmvjmCEBy_lEmXhrah1mvRYa0p02ieod0tt8DNqC5yhMfZnkqp0bTnzhNbrQEdUPk8hPb0tv2n545T2oC3_Ye2skFs2S1kuy5xFGtdr5mMYLGGBgwON3G5Qit9soM8aaVXHSJa2Y-_t_QTEcBsQ8N8GqWSOMbytRW-GU-9BtGQ5xaguAT_gIBhH7R2MCV4C2tpRI7YbM',
  },
  {
    id: 'norwegian-wood',
    title: '노르웨이의 숲',
    author: '무라카미 하루키',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp_P3KvBlP5R2GwsAzV4kcDHgBk9qgF_cbC3NO4iif7fUSApEPORjRIkwjyTYj3oEcv8l99F0pDR31ZFLTrs1r3GrG8OuDgTt_DltnnCLQ4GQop8vBEPBzOG1LLkvnCPNtJ1wBk-apPAb0K95IHSQrHNeQ-MfZ0LOWLBTJ96p-vFdzFnfGf-hVK-VgZbk7795XdTjcbu1bVR7vI0E78YgaZyxFLxOAp-9tacqWrR-XiTcGWirJsjO5z18vM4RWwtvb5qDWiN99XTM',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: '김정현',
    initials: 'JK',
    time: '2시간 전',
    avatarColor: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900',
    content: '과학적인 디테일이 살아있으면서도 이렇게 감동적일 수 있다니... 마지막 챕터에서 정말 전율을 느꼈습니다.',
  },
  {
    id: 'r2',
    userName: '이서윤',
    initials: 'SY',
    time: '5시간 전',
    avatarColor: 'bg-teal-100 text-teal-600 dark:bg-teal-900',
    content: '로키와의 우정이 기억에 남네요. 언어가 다른 존재와 소통하는 과정이 매우 인상적이었어요.',
  },
  {
    id: 'r3',
    userName: '박도현',
    initials: 'DH',
    time: '어제',
    avatarColor: 'bg-amber-100 text-amber-600 dark:bg-amber-900',
    content: "'마션'보다 훨씬 깊이 있고 방대한 이야기입니다. 앤디 위어는 천재가 분명해요!",
  },
  {
    id: 'r4',
    userName: '최민지',
    initials: 'MJ',
    time: '2일 전',
    avatarColor: 'bg-rose-100 text-rose-600 dark:bg-rose-900',
    content: '모임에서 나눌 이야기가 정말 많을 것 같습니다. 벌써 기대되네요.',
  },
];
