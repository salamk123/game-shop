import React, { FC, useState } from "react";
import cl from './OptionsItem.module.css';

interface OptionsItemProps {
    name: string
}

const OptionsItem: FC<OptionsItemProps> = ({name}) => {
    const [isOption, setIsOption] = useState<string>('Рекомендуем');
    const clName: string[] = [cl.option];

    if (isOption === name) {
        clName.push(cl.active)
    }

    return(
        <div className={clName.join(' ')} onClick={() => setIsOption(name)}>{name}</div>
    )
}

export default OptionsItem;