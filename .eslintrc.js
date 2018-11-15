module.exports = {
'extends': 'airbnb',
'env': {
    'browser': true,
    'node': true,
    'jest': true,
},
'parser': 'babel-eslint',
'parserOptions': {
    'ecmaFeatures': {
    'experimentalObjectRestSpread': true,
    },
    'ecmaVersion': 8,
},
'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'camelcase': 'off', // 데이터베이스의 값을 받아올것이기 때문에 카멜케이스와 스네이크케이스 동시 이용할 예정
    "arrow-body-style": 'off', // arrow body 쓸거임
    'class-methods-use-this': 'off', // class 내장함수만들면 this를 반드시 쓰라는데.... 안 쓰고 싶을때도 있다구. 친구

    'linebreak-style': [0, 'windows'],
    
    'no-alert': 'off',
    'no-confirm': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'no-underscore-dangle': 'off', // underscore 를 쓸거고 private 변수 앞에서 쓸거임
    'no-restricted-globals': 'off', // Number.isNaN() IE에서 안먹어서 isNaN()이거 쓰려고 하는데, 글로벌 메서드 못쓰게 막은거 해제함

    'max-len': 'off',
    'object-curly-newline': 'off', // new line 하기 싫다.

    'import/no-unresolved': 'off', // 앞에 절대경로 쓰기 싫음. - - 
    'import/extensions': 'off', // 앞에 절대경로 쓰기 싫음. - - 
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',

    'jsx-a11y/no-noninteractive-element-interactions': 'off', // 클릭 리스너가 없는곳에다가 onClick 을 넣지마라
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off', // 클릭이벤트를 만들었으면 키보드이벤트도 같이 넣어서 마우스만 컨트롤 하는게 아닌 키보드 컨트롤도 가능하게끔 
    'jsx-a11y/anchor-is-valid': 'off', // Link태그에 href계속 붙이라고 하는거 좀 짜증남

    //이건 나중에 실제 업무에서 사용할 때 쓰는것이 좋겠다.
    'react/prop-types': 'warn', // 속성값을 반드시 지정해야한다.
    'react/forbid-prop-types': 'off', // react component 에서 Prop object가 떨어질 수 있는데 못받게 하는것 꺼버림
    'react/jsx-filename-extension': 'off', // jsx는 따로 확장자명을 두고 써라
    'react/no-render-return-value': 'off', // { }없으면 그냥 리턴인데 자꾸 리턴하라해서 끔
    'react/jsx-curly-brace-presence': 'off', // 속성에 들어갈 문자열이 길어서 템플릿 리터럴을 쓰는데 .. 자꾸 못쓰게함
    'react/no-find-dom-node': 'off', // 특정 노드로 스크롤을 할때 특정 노드를 ref로 지정해도 scroll 위치를 구할 수 없음... 실제 DOM에 접근 하는 수 밖에..
},
};