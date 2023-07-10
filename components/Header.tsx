interface Props {
    imgName: string;
}

const Header = ({ imgName }: Props) => {
    return (
        <div className="absolute top-[29px] left-[calc(50%_-_922px)] w-[1843.19px] h-[69.91px] overflow-hidden text-smi text-white">
            <div className="absolute top-[0px] left-[0px] box-border w-[884px] overflow-hidden flex flex-row py-0 pr-[848px] pl-0 items-start justify-start border-[0.5px] border-solid border-gray-300">
                <img
                    className="absolute my-0 mx-[!important] h-[calc(100%_+_0.09px)] w-[calc(100%_-_73px)] top-[0px] right-[0px] bottom-[-0.09px] left-[73px] max-w-full overflow-hidden max-h-full z-[0]"
                    alt=""
                    src="/divfrost.svg"
                />
                <img
                    className="absolute my-0 mx-[!important] h-[calc(100%_+_0.09px)] w-[calc(100%_-_757px)] top-[0px] right-[684px] bottom-[-0.09px] left-[73px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/divfrost1.svg"
                />
                <img
                    className="relative w-[73.59px] h-[69.91px] opacity-[0.5] z-[2]"
                    alt=""
                    src="/home.svg"
                />
            </div>
            <div className="absolute top-[0px] left-[884px] w-[959px] flex flex-row items-start justify-start">
                <div className="relative w-[307.19px] h-[69.91px] z-[0] text-[16.56px]">
                    <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_26.33px)] w-[65px] h-5 overflow-hidden">
                        <div className="absolute top-[-1px] left-[0px] leading-[20px] font-medium flex items-center w-[52.84px] h-[21px] hover:text-aqua">
                            ABOUT
                        </div>
                    </div>
                    <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] bg-gray-600 w-px overflow-hidden" />
                    <div className="absolute top-[50.72px] left-[15.99px] text-smi leading-[10px] font-medium opacity-[0.5]">
                        001
                    </div>
                </div>
                <div className="w-[307.22px] flex flex-row items-start justify-start z-[1]">
                    <div className="flex-1 relative h-[69.91px]">
                        <img
                            className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_15.81px)] w-8 h-8 overflow-hidden"
                            alt=""
                            src="/631f46d6d0cf7a2d1a0aa511-discordsvg.svg"
                        />
                        <div className="absolute top-[51.25px] left-[-298.2px] w-80 flex flex-row items-center justify-between">
                            <div />
                            <div className="flex flex-row items-start justify-start gap-[2px]">
                                <div />
                                <div />
                            </div>
                        </div>
                        <div className="absolute h-full top-[0px] right-[0.61px] bottom-[0px] bg-gray-600 w-px overflow-hidden" />
                        <div className="absolute top-[50.72px] left-[6.8px] leading-[10px] font-medium opacity-[0.5]">
                            002
                        </div>
                    </div>
                    <div className="relative w-[154px] h-[70px]">
                        <img
                            className="absolute top-[calc(50%_-_16.05px)] left-[calc(50%_-_16.2px)] w-8 h-8 overflow-hidden"
                            alt=""
                            src="/631f46d6d0cf7a0d8b0aa510-twittersvg.svg"
                        />
                        <div className="absolute top-[50.72px] left-[9.19px] leading-[10px] font-medium opacity-[0.5]">
                            003
                        </div>
                        <div className="absolute h-[calc(100%_-_0.09px)] top-[0px] right-[0.39px] bottom-[0.09px] bg-gray-600 w-px overflow-hidden" />
                        <div className="absolute h-[calc(100%_-_0.09px)] top-[0px] right-[-255.61px] bottom-[0.09px] bg-gray-600 w-px overflow-hidden" />
                    </div>
                </div>
                <div className="relative w-[255px] h-[70px] z-[2]">
                    <div className="absolute top-[50.72px] left-[9.19px] leading-[10px] font-medium opacity-[0.5]">
                        004
                    </div>
                    <div className="absolute top-[calc(50%_-_10.05px)] left-[calc(50%_-_64.66px)] w-[200px] h-5 overflow-hidden text-[16.56px]">
                        <div className="absolute top-[-1px] left-[0px] leading-[20px] uppercase font-medium">
                            LAUNCh ultiverse
                        </div>
                    </div>
                </div>
                <div className="absolute my-0 mx-[!important] w-[calc(100%_-_0.41px)] top-[0px] right-[0.41px] left-[0px] bg-gray-600 h-px z-[3]" />
                <div className="absolute my-0 mx-[!important] h-[calc(100%_-_0.09px)] top-[0px] right-[0.41px] bottom-[0.09px] bg-gray-600 w-px overflow-hidden shrink-0 z-[4]" />
                <div className="absolute my-0 mx-[!important] w-[calc(100%_-_0.41px)] right-[0.41px] bottom-[0.09px] left-[0px] bg-gray-400 h-px z-[5]" />
            </div>
        </div>
    )
}

export default Header