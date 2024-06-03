module.exports={
    transform:{
        '^.+\\.jsx?$':'babel-jest'
    },
    moduleNameMapper:{
        '\\.(css|less|scss|sass)$':'styleMock.js',
    }
};