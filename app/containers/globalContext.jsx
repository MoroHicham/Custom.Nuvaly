// MyContext.js

import React, { createContext, useState } from 'react';
const GlobalContext = React.createContext({
    args1:'',
    args2:'',
});
export default GlobalContext;