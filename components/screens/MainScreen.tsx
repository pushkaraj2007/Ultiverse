import Header from "../Header";

const MainScreen = () => {
    const menuItems = [
        ['missions', 'hover:text-aqua'],
        ['characters', 'hover:text-aqua'],
        ['loadouts', 'hover:text-aqua'],
        ['events', 'hover:text-aqua'],
    ];

    return (
        <div className="relative bg-gray-100 w-full h-[1080px] overflow-hidden text-left text-5xl text-gray-700 font-terminus-ttf">
            <img
                className="absolute top-[459.49px] left-[824.26px] w-[188.48px] h-[130.25px]"
                alt=""
                src="/vector-18.svg"
            />
            <img
                className="absolute top-[416.52px] left-[828.18px] w-[185.31px] h-[130.08px]"
                alt=""
                src="/vector-26.svg"
            />
            <img
                className="absolute h-[113.52%] w-full top-[0%] right-[0%] bottom-[-13.52%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.3]"
                alt=""
                src="/dots.svg"
            />
            <img
                className="absolute top-[0px] left-[0px] w-[1920px] h-[1080px] object-cover opacity-[0.2]"
                alt=""
                src="/rectangle-7635@2x.png"
            />
            <div className="absolute top-[978px] left-[43px] flex flex-col items-start justify-start text-[20px] text-gray-200">
                <div className="flex flex-row items-center justify-start gap-[32px]">
                    <div className="h-[34px] flex flex-col items-center justify-center gap-[4.97px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                        <div className="relative rounded-[6.26px] bg-white w-[10.2px] h-[1.36px]" />
                        <div className="relative rounded-[6.26px] bg-white w-[31.28px] h-[1.36px]" />
                        <div className="relative rounded-[6.26px] bg-white w-[20.4px] h-[1.36px]" />
                        <div className="relative rounded-[6.26px] bg-white w-[31.28px] h-[1.36px]" />
                        <div className="relative rounded-[6.26px] bg-white w-[20.4px] h-[1.36px]" />
                    </div>
                    <b className="relative leading-[141.2%] inline-block w-[520px] shrink-0">
                        UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND
                        IMMERSIVE GAMING METAVERSE.
                    </b>
                </div>
            </div>
            <div className="absolute top-[254px] left-[43px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[8px] text-aqua">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                        <div className="relative bg-aqua w-1.5 h-[33px]" />
                        <div className="relative bg-aqua w-0.5 h-[33px]" />
                    </div>
                    <div className="relative uppercase font-medium">MAP</div>
                </div>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-row items-center justify-start gap-[8px] ${item[1]}`}
                    >
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative bg-gray-700 w-1.5 h-[33px] hover:bg-aqua" />
                            <div className="relative bg-gray-700 w-0.5 h-[33px] hover:bg-aqua" />
                        </div>
                        <div className="relative uppercase font-medium">{item[0]}</div>
                    </div>
                ))}
            </div>

            <div className="absolute top-[787px] left-[431px]" />
            <div className="absolute top-[163.63px] left-[-32.46px] rounded-[50%] box-border w-[1984.93px] h-[1984.93px] opacity-[0.1] border-[1px] border-solid border-gray-600" />
            <div className="absolute top-[675.3px] left-[479.2px] rounded-[50%] box-border w-[961.6px] h-[961.6px] border-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[448px] left-[874px] rounded-[50%] bg-aqua [filter:blur(77px)] w-[100px] h-[100px]" />
            <img
                className="absolute top-[93px] left-[354px] w-[1139px] h-[840.09px] object-cover"
                alt=""
                src="/tips-1@2x.png"
            />

            <Header imgName="" />

            <div className="absolute h-[calc(100%_-_6px)] top-[0px] right-[1459px] bottom-[6px] bg-gray-600 w-px overflow-hidden" />
            <div className="absolute h-[calc(100%_-_6px)] top-[0px] right-[998px] bottom-[6px] bg-gray-500 w-px overflow-hidden">
                <div className="absolute top-[644.09px] left-[0px] bg-white w-px h-5" />
            </div>
            <div className="absolute h-[calc(100%_-_6px)] top-[0px] right-[538px] bottom-[6px] bg-gray-600 w-px overflow-hidden" />
            <div className="absolute top-[379px] left-[173px] flex flex-row items-end justify-start gap-[148px]">
                <div className="relative w-[1041.8px] h-[335px]">
                    <div className="absolute top-[0px] left-[55px] flex flex-row items-start justify-start gap-[16.14px]">
                        <img
                            className="relative w-[22.36px] h-[157.89px]"
                            alt=""
                            src="/vector.svg"
                        />
                        <img
                            className="relative w-[106.67px] h-[157.89px]"
                            alt=""
                            src="/vector1.svg"
                        />
                        <img
                            className="relative w-[106.67px] h-[157.89px]"
                            alt=""
                            src="/vector2.svg"
                        />
                        <img
                            className="relative w-[64.7px] h-[157.89px]"
                            alt=""
                            src="/vector3.svg"
                        />
                        <img
                            className="relative w-[80.21px] h-[158px]"
                            alt=""
                            src="/vector4.svg"
                        />
                        <img
                            className="relative w-[82.12px] h-[157.89px]"
                            alt=""
                            src="/vector5.svg"
                        />
                        <img
                            className="relative w-[22.36px] h-[157.89px]"
                            alt=""
                            src="/vector6.svg"
                        />
                        <img
                            className="relative w-[92.39px] h-[157.89px]"
                            alt=""
                            src="/vector7.svg"
                        />
                        <img
                            className="relative w-[64.7px] h-[157.89px]"
                            alt=""
                            src="/vector8.svg"
                        />
                    </div>
                    <div className="absolute top-[195px] left-[336px] flex flex-row items-start justify-start gap-[14.87px]">
                        <img
                            className="relative w-[100.65px] h-[147.83px]"
                            alt=""
                            src="/vector9.svg"
                        />
                        <img
                            className="relative w-[63.69px] h-[147.83px]"
                            alt=""
                            src="/vector10.svg"
                        />
                        <img
                            className="relative w-[73.59px] h-[147.83px]"
                            alt=""
                            src="/vector11.svg"
                        />
                        <img
                            className="relative w-[85px] h-[147.83px]"
                            alt=""
                            src="/vector12.svg"
                        />
                        <img
                            className="relative w-[76.61px] h-[147.83px]"
                            alt=""
                            src="/vector13.svg"
                        />
                        <img
                            className="relative w-[63.69px] h-[147.83px]"
                            alt=""
                            src="/vector14.svg"
                        />
                        <img
                            className="relative w-[76.82px] h-[147.92px]"
                            alt=""
                            src="/vector15.svg"
                        />
                        <img
                            className="relative w-[79.72px] h-[147.83px]"
                            alt=""
                            src="/vector16.svg"
                        />
                        <img
                            className="relative w-[63.69px] h-[147.83px]"
                            alt=""
                            src="/vector17.svg"
                        />
                    </div>
                    <div className="absolute top-[0px] left-[0px] leading-[10px] font-medium">
                        001
                    </div>
                    <div className="absolute top-[191px] left-[278px] leading-[10px] font-medium">
                        002
                    </div>
                </div>
                <img
                    className="relative w-[497px] h-[559px] object-cover"
                    alt=""
                    src="/group-21105@2x.png"
                />
            </div>
            <div className="absolute top-[58px] left-[1861px] flex flex-col items-start justify-start [transform:_rotate(180deg)] [transform-origin:0_0]">
                <img
                    className="relative w-[47px] h-[8.5px]"
                    alt=""
                    src="/vector18.svg"
                />
            </div>
            <div className="absolute top-[259px] left-[611px] rounded-[50%] bg-aqua [filter:blur(96px)] w-[562px] h-[562px] mix-blend-overlay" />
            <img
                className="absolute top-[886px] left-[1807px] w-7 h-7 overflow-hidden"
                alt=""
                src="/frame.svg"
            />
        </div>
    )
}

export default MainScreen;