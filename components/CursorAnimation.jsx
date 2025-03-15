import React, { useEffect, useState, useRef } from 'react';

const CursorAnimation = ({ isDarkMode }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const trailsRef = useRef([]);
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const [trailPositions, setTrailPositions] = useState([]);

    useEffect(() => {
        const initialPositions = Array(6).fill({ x: position.x, y: position.y });
        setTrailPositions(initialPositions);
    }, []);

    const animate = time => {
        if (previousTimeRef.current !== undefined) {
            setTrailPositions(prev => {
                const newPositions = [position, ...prev.slice(0, prev.length - 1)];
                return newPositions;
            });
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [position]);

    const updateMousePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const handleMouseDown = () => {
            setClicked(true);
            setTimeout(() => setClicked(false), 300);
        };

        const handleMouseLeave = () => {
            setHidden(true);
        };

        const handleMouseEnter = () => {
            setHidden(false);
        };

        const handleLinkHoverIn = () => {
            setLinkHovered(true);
        };

        const handleLinkHoverOut = () => {
            setLinkHovered(false);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);


        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer, select');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleLinkHoverIn);
            element.addEventListener('mouseleave', handleLinkHoverOut);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);

            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleLinkHoverIn);
                element.removeEventListener('mouseleave', handleLinkHoverOut);
            });
        };
    }, []);


    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth > 1024);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    if (!isDesktop) return null;


    const getCursorColors = () => {

        const lightModeBase = {
            primary: 'rgba(79, 70, 229, 0.7)', 
            secondary: 'rgba(219, 39, 119, 0.7)',
            accent: 'rgba(236, 72, 153, 0.7)',
            clicked: 'rgba(139, 92, 246, 0.7)'
        };

        const darkModeBase = {
            primary: 'rgba(199, 210, 254, 0.7)',
            secondary: 'rgba(244, 114, 182, 0.7)',
            accent: 'rgba(248, 113, 113, 0.7)',
            clicked: 'rgba(167, 139, 250, 0.7)'
        };

        const baseColors = isDarkMode ? darkModeBase : lightModeBase;

        if (clicked) {
            return {
                dot: baseColors.clicked,
                outline: isDarkMode ? 'rgba(167, 139, 250, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                shadow: `0 0 15px ${baseColors.clicked}, 0 0 30px ${baseColors.clicked.replace('0.7', '0.3')}`
            };
        } else if (linkHovered) {
            return {
                dot: baseColors.accent,
                outline: isDarkMode ? 'rgba(236, 72, 153, 0.2)' : 'rgba(219, 39, 119, 0.2)',
                shadow: `0 0 12px ${baseColors.accent}, 0 0 24px ${baseColors.accent.replace('0.7', '0.3')}`
            };
        } else {
            return {
                dot: baseColors.primary,
                outline: isDarkMode ? 'rgba(199, 210, 254, 0.15)' : 'rgba(79, 70, 229, 0.15)',
                shadow: `0 0 10px ${baseColors.primary}, 0 0 20px ${baseColors.primary.replace('0.7', '0.2')}`
            };
        }
    };

    const colors = getCursorColors();

    return (
        <>
            <div
                className={`cursor-dot ${hidden ? 'opacity-0' : ''} ${clicked ? 'cursor-dot-clicked' : ''} ${linkHovered ? 'cursor-dot-hover' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    backgroundColor: colors.dot,
                    boxShadow: colors.shadow,
                    pointerEvents: 'none',
                }}
            />

            <div
                className={`cursor-outline ${hidden ? 'opacity-0' : ''} ${clicked ? 'cursor-outline-clicked' : ''} ${linkHovered ? 'cursor-outline-hover' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    borderColor: colors.outline,
                    background: linkHovered ? 'rgba(236, 72, 153, 0.05)' : 'transparent',
                    boxShadow: linkHovered ? `0 0 20px ${colors.outline}` : 'none',
                    pointerEvents: 'none',
                }}
            />

            {/* Enhanced cursor trail with dynamic colors */}
            {trailPositions.map((pos, index) => (
                <div
                    key={index}
                    className="trail-dot"
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                        width: `${6 - index * 0.8}px`,
                        height: `${6 - index * 0.8}px`,
                        opacity: clicked ? (0.4 - index * 0.05) : (0.25 - index * 0.03),
                        backgroundColor: colors.dot,
                        transform: 'translate(-50%, -50%)',
                        position: 'fixed',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 998 - index,
                        transition: 'opacity 0.15s ease',
                        boxShadow: clicked
                            ? `0 0 ${6 - index}px ${colors.dot.replace('0.7', '0.3')}`
                            : `0 0 ${3 - index * 0.5}px ${colors.dot.replace('0.7', '0.15')}`,
                        filter: clicked ? 'blur(0.5px)' : 'blur(0px)',
                    }}
                />
            ))}
        </>
    );
};

export default CursorAnimation;
